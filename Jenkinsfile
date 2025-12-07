pipeline {
    agent {
        docker {
            image 'docker:latest'  // Use a Docker image that includes Docker CLI and tools
            args '-v /var/run/docker.sock:/var/run/docker.sock'  // Mount the host's Docker socket for access
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Checks out from the configured SCM (e.g., your GitHub repo)
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker --version'  // Optional: Verify Docker is accessible
                sh 'docker build -t my-nodejs-app:latest .'  // Build the image
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'  // Placeholder for actual tests (e.g., run npm test if you have a Node.js app)
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
