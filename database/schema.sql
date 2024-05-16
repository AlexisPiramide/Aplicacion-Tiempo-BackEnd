CREATE TABLE lugar (
    municipio VARCHAR(50),
    localidad VARCHAR(50),
    cpostal INTEGER UNIQUE,
    PRIMARY KEY (municipio, localidad)
);


CREATE TABLE usuario (
    nombre VARCHAR(50),
    apellidos VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(50)
);

CREATE TABLE tiempo (
    dia DATE,
    temperatura_maxima NUMERIC(5,2),
    temperatura_minima NUMERIC(5,2),
    humedad_media NUMERIC(5,2),
    viento_maxima NUMERIC(5,2),
    viento_minima NUMERIC(5,2),
    probabilidad_precipitacion NUMERIC(5,2),
    usuario VARCHAR(50),
    municipio VARCHAR(50),
    localidad VARCHAR(50),
    PRIMARY KEY (dia, municipio, localidad),
    FOREIGN KEY (municipio, localidad) REFERENCES lugar(municipio, localidad),
    FOREIGN KEY (usuario) REFERENCES usuario(email)
);


INSERT INTO lugar (municipio, localidad, cpostal) VALUES
('Madrid', 'Madrid', 28001),
('Badia del Vallès', 'Barcelona', 08007);


INSERT INTO usuario (nombre, apellidos, email, password) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'password123'),
('María', 'Gómez', 'maria.gomez@example.com', 'password456');

INSERT INTO tiempo (dia, temperatura_maxima, temperatura_minima, humedad_media, viento_maxima, viento_minima, probabilidad_precipitacion, usuario, municipio, localidad) VALUES
('2024-05-15', 30.5, 15.2, 65.5, 20.3, 5.1, 10.0, 'juan.perez@example.com', 'Madrid', 'Madrid'),
('2024-05-16', 28.0, 16.0, 70.0, 18.5, 4.0, 20.0, 'maria.gomez@example.com', 'Badia del Vallès', 'Barcelona');


SELECT tiempo.dia, tiempo.temperatura_maxima, tiempo.temperatura_minima, tiempo.humedad_media, tiempo.viento_maxima, tiempo.viento_minima, tiempo.probabilidad_precipitacion, tiempo.usuario, lugar.municipio, lugar.localidad
FROM tiempo
JOIN lugar ON tiempo.municipio = lugar.municipio AND tiempo.localidad = lugar.localidad
WHERE tiempo.usuario = 'juan.perez@example.com';
