#!/bin/bash
# Deploy artifact to S3
pipeline_directory=$1
cd $pipeline_directory/.. && \
	aws s3 cp ./dist/ s3://truenorth-arithmetic-calculator-front-s3/ --recursive

