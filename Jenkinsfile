pipeline {
  agent any
  stages {
    stage('Run Docker containers') {
      steps {
        sh 'docker stop honeykers_con_01 || true'
        sh 'docker rm -f honeykers_con_01 || true'
        sh 'docker build -t honeykers_img:01 .'
        sh 'docker run -d --name honeykers_con_01 -p 3000:3000 honeykers_img:01'
        sh 'docker image prune -a -f'
        sh 'docker stop honeykers_con_02 || true'
        sh 'docker rm -f honeykers_con_02 || true'
        sh 'docker build -t honeykers_img:02 .'
        sh 'docker run -d --name honeykers_con_02 -p 3000:3000 honeykers_img:02'
        sh 'docker image prune -a -f'
      }
    }
  }
}