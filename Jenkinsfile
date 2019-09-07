pipeline {
  agent any
  stages {
    stage('Run Docker containers') {
      steps {
        sh 'docker stop honeykers_con_01 || true'
        sh 'docker rm -f honeykers_con_01 || true'
        sh '''docker rmi $(docker images |grep \'honeykers_img:01
\')'''
        sh 'docker run -d --name honeykers_con_01 -p 3000:3000 honeykers_img:01'
      }
    }
  }
}