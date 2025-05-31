FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY . .

RUN ./mvnw package -DskipTests

EXPOSE 8080

# Usa el nombre exacto de tu archivo JAR
CMD ["java", "-jar", "target/shifter-backend.jar"]
