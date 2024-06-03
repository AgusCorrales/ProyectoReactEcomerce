# Proyecto de E-Commerce

Este proyecto es una aplicación de e-commerce construida con React y varios contextos de estado para manejar usuarios y productos. La aplicación permite a los usuarios registrarse, iniciar sesión, ver productos, añadir productos al carrito y gestionar su perfil y pedidos.

## Descripción

Esta aplicación de e-commerce permite a los usuarios navegar por productos, añadir productos al carrito, registrarse e iniciar sesión, y ver y gestionar su perfil y pedidos. La aplicación utiliza React Context y useReducer para manejar el estado global de la aplicación y Axios para realizar solicitudes HTTP al servidor backend.

## Imagenes
<img width="1512" alt="Captura de pantalla 2024-06-03 a la(s) 1 54 13" src="https://github.com/AgusCorrales/ProyectoReactEcomerce/assets/162991987/9a01d2ec-e3f4-41ea-b8f1-4c836e673fe6">

<img width="1510" alt="image" src="https://github.com/AgusCorrales/ProyectoReactEcomerce/assets/162991987/1fe1e320-4c80-4195-8e24-b666c155be80">

<img width="1512" alt="Captura de pantalla 2024-06-03 a la(s) 1 51 15" src="https://github.com/AgusCorrales/ProyectoReactEcomerce/assets/162991987/9b41ab0a-7a95-4dc4-bd34-df396f4a3b94">

<img width="1512" alt="Captura de pantalla 2024-06-03 a la(s) 1 51 45" src="https://github.com/AgusCorrales/ProyectoReactEcomerce/assets/162991987/eb661734-dac6-4b84-bca9-62fe30dba9d0">

<img width="1509" alt="Captura de pantalla 2024-06-03 a la(s) 1 52 29" src="https://github.com/AgusCorrales/ProyectoReactEcomerce/assets/162991987/09f5dda4-ecd2-4676-bbf0-055edfe6fcf7">

<img width="1512" alt="Captura de pantalla 2024-06-03 a la(s) 1 52 52" src="https://github.com/AgusCorrales/ProyectoReactEcomerce/assets/162991987/e928c54f-252e-4288-b037-b1e9a4e87a74">

## Características

- Registro e Inicio de Sesión de Usuarios: Los usuarios pueden registrarse y acceder a su cuenta.
- Gestión de Productos: Los usuarios pueden ver la lista de productos disponibles y añadirlos al carrito.
- Carrito de Compras: Los usuarios pueden añadir productos al carrito y ver el contenido del mismo.
- Perfil de Usuario: Los usuarios pueden ver y gestionar la información de su perfil y sus pedidos.
- Despliegue de Productos en Home: Los productos se muestran con un diseño atractivo y funcional.

## Uso
### Registro
1- Accede a la página de registro desde la barra de navegación.
2- Rellena el formulario con tu información personal.
3- Haz clic en el botón "Register" para crear tu cuenta.

### Inicio de Sesión
1- Accede a la página de inicio de sesión desde la barra de navegación.
2- Rellena el formulario con tu correo electrónico y contraseña.
3- Haz clic en el botón "Login" para acceder a tu cuenta.

### Navegar Productos
1- Accede a la página principal para ver los productos destacados.
2- Utiliza la barra de búsqueda para encontrar productos específicos.
3- Haz clic en un producto para ver más detalles y añadirlo al carrito.

### Carrito de Compras
1- Accede a la página del carrito desde la barra de navegación.
2- Revisa los productos añadidos y su precio total.
3- Procede con la compra o sigue navegando para añadir más productos.

### Perfil de Usuario
1- Accede a la página de perfil desde la barra de navegación.
2- Revisa y actualiza tu información personal.
3- Ve tus pedidos y el estado de los mismos.

## Estructura del Proyecto

/src
|-- /components
|   |-- Header.js
|   |-- Home.js
|   |-- Product.js
|   |-- Profile.js
|   |-- Register.js
|   |-- Login.js
|-- /context
|   |-- /UserContext
|   |   |-- UserState.js
|   |   |-- UserReducer.js
|   |-- /ProductContext
|       |-- ProductState.js
|       |-- ProductReducer.js
|-- /styles
|   |-- Header.scss
|   |-- Home.scss
|   |-- Product.scss
|   |-- Profile.scss
|   |-- Register.scss
|-- App.js
|-- index.js

