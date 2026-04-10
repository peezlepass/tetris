#!/bin/bash
set -e

S3_BUCKET="peezlepass.com"
S3_PREFIX="tetris"
CLOUDFRONT_DISTRIBUTION_ID="E4UYBY6M7UIUM"

echo "Building..."
npm run build

echo "Uploading to s3://$S3_BUCKET/$S3_PREFIX/..."
aws s3 sync dist/ "s3://$S3_BUCKET/$S3_PREFIX/"

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "/$S3_PREFIX/*" \
  --query 'Invalidation.Id' \
  --output text

echo "Done!"
