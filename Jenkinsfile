pipeline {
  agent any
  stages {
    stage('Run Docker container 01') {
      steps {
        sh 'docker stop honeykers_con_01 || true'
        sh 'docker rm -f honeykers_con_01 || true'
        sh 'docker image prune -a -f'
        sh 'docker build -t honeykers_img:01 .'
        sh 'docker run -d --name honeykers_con_01 -p 3000:3000 honeykers_img:01'
      }
    }
    stage('Run Docker container 02') {
      steps {
        sh 'docker stop honeykers_con_02 || true'
        sh 'docker rm -f honeykers_con_02 || true'
        sh 'docker image prune -a -f'
        sh 'docker build -t honeykers_img:02 .'
        sh 'docker run -d --name honeykers_con_02 -p 3001:3000 honeykers_img:02'
      }
    }
  }
}