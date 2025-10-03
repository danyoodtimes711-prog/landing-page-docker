pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo "Cloned repo successfully"
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t landing-page-docker .'
            }
        }
        stage('Run Container') {
            steps {
                // Stop and remove old container if exists
                sh '''
                  if [ "$(docker ps -aq -f name=landing-page)" ]; then
                    docker rm -f landing-page
                  fi
                  docker run -d -p 8081:80 --name landing-page landing-page-docker
                '''
            }
        }
    }
}
