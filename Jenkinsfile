pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-nodejs-app:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying the app..."

                    # Stop old container if exists
                    if [ "$(docker ps -aq -f name=my-node-container)" ]; then
                        docker rm -f my-node-container
                    fi

                    # Run new container
                    docker run -d -p 3000:3000 --name my-node-container my-nodejs-app:latest
                '''
            }
        }
    }

    post {
        always {
            sh 'echo "Pipeline finished"'
        }

        success {
            sh 'echo "build success"'
        }
    }
}
