pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/html"
        GIT_REPO = "https://github.com/Illinium/StarDb.git"
    }

    stages {
        stage('Install Apache2') {
            steps {
                script {
                    sh '''
                    sudo apt update

                    sudo apt install -y apache2

                    sudo systemctl enable apache2
                    
                    sudo systemctl restart apache2
                    '''
                }
            }
        }
        stage('Clone Repository') {
            steps {
                script {
                    sh '''
                    sudo rm -rf $DEPLOY_DIR/*

                    git clone $GIT_REPO
                    
                    sudo cp -r build/* $DEPLOY_DIR/
                    
                    rm -rf tmp_repo
                    '''
                }
            }
        }
        stage('Check Logs for Errors') {
            steps {
                script {
                    sh '''
                    LOG_FILE="/var/log/apache2/access.log"

                    echo "Checking $LOG_FILE for 4xx and 5xx errors..."

                    # Count occurrences of 4xx and 5xx errors
                    ERROR_COUNT=$(grep -E " [4|5][0-9]{2} " $LOG_FILE | wc -l)

                    if [ $ERROR_COUNT -gt 0 ]; then
                        echo "Found $ERROR_COUNT error(s) in the logs:"
                        grep -E " [4|5][0-9]{2} " $LOG_FILE
                        exit 1
                    else
                        echo "No 4xx or 5xx errors found in the logs."
                    fi
                    '''
                }
            }
        }
    }
}
