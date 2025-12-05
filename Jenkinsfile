pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Build Docker Image') { steps { script { docker.build('my-nodejs-app') } } }
        stage('Test') { steps { script { docker.image('my-nodejs-app').inside('-p 3000:3000') { sh 'curl http://localhost:3000/hello || exit 1' } } } }
        stage('Deploy') { steps { script { docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') { docker.image('my-nodejs-app').push('latest') } } } }
    }
    post { always { sh 'docker system prune -f' } }
}