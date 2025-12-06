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
                sh '''
                    docker build -t my-nodejs-app .
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    echo "Running tests..."
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying the app..."
                '''
            }
        }
    }

    post {
        always {
            sh 'echo "Pipeline finished"'
        }
        success{
            sh '''
                echo "build success"
                '''
        }
        
    }
}
