pipeline {
  agent any
  stages {
    stage('Run Docker container 01') {
      steps {
        sh 'docker stop honeykers_con_01 || true'
        sh 'docker rm -f honeykers_con_01 || true'
        sh 'docker rmi $(docker images | grep "honeykers_img_01" | awk "{print $3}")'
        sh 'docker build -t honeykers_img_01 .'
        sh 'docker run -d --name honeykers_con_01 -p 3000:3000 honeykers_img_01'
      }
    }
    stage('Run Docker container 02') {
      steps {
        sh 'docker stop honeykers_con_02 || true'
        sh 'docker rm -f honeykers_con_02 || true'
        sh 'docker rmi $(docker images | grep "honeykers_img_02" | awk "{print $3}")'
        sh 'docker build -t honeykers_img_02 .'
        sh 'docker run -d --name honeykers_con_02 -p 3001:3000 honeykers_img_02'
      }
    }
  }
}