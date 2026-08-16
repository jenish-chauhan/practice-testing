pipeline {
    agent any

    environment {
        DOCKER_IMAGE   = 'jenishchauhan/practice-testing'
        CONTAINER_NAME = 'practice-testing'
        IMAGE_TAG      = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jenish-chauhan/practice-testing.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                        -t ${DOCKER_IMAGE}:${IMAGE_TAG} \
                         \
                        .
                '''
                //-t ${DOCKER_IMAGE}:latest
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry(
                        'https://index.docker.io/v1/',
                        'docker'
                    ) {
                        docker.image("${DOCKER_IMAGE}:${IMAGE_TAG}").push()
                        //docker.image("${DOCKER_IMAGE}:latest").push()
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker rm -f ${CONTAINER_NAME} || true

                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        -p 8081:80 \
                        ${DOCKER_IMAGE}:${IMAGE_TAG}
                '''
            }
        }
    }

    post {
        success {
            echo "========================================="
            echo "Deployment successful!"
            echo "Image: ${DOCKER_IMAGE}:${IMAGE_TAG}"
            echo "Latest: ${DOCKER_IMAGE}:latest"
            echo "Container: ${CONTAINER_NAME}"
            echo "Port: 8081 -> 80"
            echo "========================================="
        }

        failure {
            echo "Pipeline failed!"
        }

        always {
            sh 'docker images ${DOCKER_IMAGE} --format "{{.Repository}}:{{.Tag}} {{.Size}}" || true'
        }
    }
}