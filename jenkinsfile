pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo "Cloning repo..."
                // Jenkins auto-clones your repo, so just logging here
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building Docker image for landing-page-docker..."'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests (dummy step)..."'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying container (to be added later)..."'
            }
        }
    }
}

