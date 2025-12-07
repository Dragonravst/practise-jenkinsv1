pipeline {
    agent {
        docker {
            image 'node:20'                     // Node.js + npm
            args '-v /var/run/docker.sock:/var/run/docker.sock' // allow docker commands
        }
    }

    environment {
        IMAGE_NAME = "my-nodejs-app"
        CONTAINER_NAME = "my-nodejs-container"
    }

    stages {
        stage('Checkout') {
            steps {
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
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo "Running tests..."'
            }
        }

        stage('Deploy') {
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
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
