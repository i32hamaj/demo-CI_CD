pipeline {
    agent any 
    
    stages {
        // Hemos borrado la etapa de Clonar porque Jenkins ya lo hace solo al principio.
        
        stage('🛠️ Instalar Dependencias') {
            steps {
                echo 'Instalando librerías de Node en el entorno seguro de Jenkins...'
                // Ejecutamos npm directamente
                bat 'npm install --no-audit --no-fund'
            }
        }
        
        stage('🧪 Pasar Tests (Jest)') {
            steps {
                echo 'Ejecutando pruebas unitarias automatizadas...'
                bat 'npm test'
            }
        }
        
        stage('🚀 Despliegue a Producción') {
            steps {
                echo 'Tests en verde. Empaquetando y desplegando...'
                bat 'if not exist produccion_v1 mkdir produccion_v1'
                bat 'copy server.js produccion_v1\\'
                echo '¡Despliegue finalizado con éxito!'
            }
        }
    }
}