pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-nodejs-app"
        CONTAINER_NAME = "my-nodejs-container"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout from Git repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Tests') {
            steps {
                // Placeholder for tests
                sh 'echo "Running tests..."'
            }
        }

        stage('Deploy') {
            steps {
                // Stop any existing container
                sh "docker rm -f ${CONTAINER_NAME} || true"
                // Run new container
                sh "docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${IMAGE_NAME}"
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
