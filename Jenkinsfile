pipeline {
    agent any // Ahora Jenkins usa su propia carpeta segura
    
    stages {
        stage('📦 Clonar Repositorio') {
            steps {
                echo 'Descargando código desde GitHub...'
                // PON AQUÍ LA URL DE TU REPOSITORIO DE GITHUB
                git 'https://github.com/i32hamaj/demo-CI_CD' 
            }
        }
        
        stage('🛠️ Instalar Dependencias') {
            steps {
                echo 'Instalando librerías de Node...'
                // Al estar en el entorno de Jenkins, npm no se congelará
                bat 'npm install --no-audit --no-fund'
            }
        }
        
        stage('🧪 Pasar Tests (Jest)') {
            steps {
                echo 'Ejecutando pruebas unitarias...'
                bat 'npm test -- --forceExit'
            }
        }
        
        stage('🚀 Despliegue a Producción') {
            steps {
                echo 'Tests en verde. Desplegando...'
                bat 'if not exist produccion_v1 mkdir produccion_v1'
                bat 'copy server.js produccion_v1\\'
                echo '¡Despliegue finalizado con éxito!'
            }
        }
    }
}