pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-nodejs-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-nodejs-app .'
            }
        }

        stage('Test') {
            steps {
                script {
                    // run container without mounting Windows paths
                    bat 'docker run -d -p 3000:3000 --name test_node_app my-nodejs-app'

                    // wait for container startup
                    bat 'ping -n 5 127.0.0.1 > nul'

                    // test endpoint
                    bat 'curl http://localhost:3000'
                }
            }
        }

        stage('Deploy') {
            when {
                expression { currentBuild.currentResult == "SUCCESS" }
            }
            steps {
                bat 'echo Deploying...'
            }
        }
    }

    post {
        always {
            bat 'docker stop test_node_app || echo "Container not running"'
            bat 'docker rm test_node_app || echo "Container not found"'
        }
    }
}
