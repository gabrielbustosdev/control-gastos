# Aplicación de Presupuesto

## Descripción

Esta es una aplicación de presupuesto que permite a los usuarios gestionar sus gastos de manera eficiente. Los usuarios pueden agregar, actualizar y eliminar gastos, así como filtrar los gastos por categoría. La aplicación también permite establecer un presupuesto y ver el total de gastos en comparación con el presupuesto establecido.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **TypeScript**: Lenguaje utilizado para agregar tipado estático a JavaScript, mejorando la calidad del código y la detección de errores.
- **Context API**: Utilizado para manejar el estado global de la aplicación, permitiendo compartir datos entre componentes sin necesidad de pasar props manualmente.
- **uuid**: Biblioteca utilizada para generar identificadores únicos para los gastos.

## Puntos Claves

### Manejo del Estado con Context API

La aplicación utiliza Context API para manejar el estado global, lo que permite una gestión eficiente de los datos sin necesidad de pasar props a través de múltiples niveles de componentes. El estado global incluye el presupuesto, la lista de gastos, el estado del modal y la categoría actual para el filtrado de gastos.
