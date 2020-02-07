# DESAFÍO

La responsabilidad de esta API es resolver los productos de una tienda.

Te presentaremos algunos desafíos sobre la arquitectura planteada.

#### `Comienzo`

1. Actualmente la API cuenta con un endpoint "/products", el cual expone todos los existentes de la tienda. Te pedimos que desarrolles uno que pueda resolver un sólo producto dinámicamente respondiendo a un "id".
2. Toda la lógica de negocio de este servicio se encuentra dentro del archivo routes/index.js, pero creemos que no es muy escalable. Te pedimos que desacomples la lógica en las capas que creas necesarias.
3. Nos dimos cuenta que todas las consultas a los modelos de sequelize fueron resueltas con "promesas", lo cual no es muy agradable a nivel código. Te pedimos que puedas reestructurarlos con "async/await".
4. Actualmente este servicio no posee ningún método de autenticación para poder exponer los datos, es decir, está público. Te pedimos que uses algún método de autenticación en un middleware de express.
5. Para poder conectar este servicio al frontend, necesitamos que se puedan crear productos y guardarlos en la base de datos. Te pedimos que realices un endpoint que pueda resolverlo.
6. En ciertos momentos nuestro equipo por decisiones del negocio y por mejorar el código decide hacer algunos "cambios", unos leves y otros no tanto. Para hacer esto siempre creemos que es bueno tener nuestro código cubierto con alguna metodología de testeo (unit tests, tests de integración o mucho mejor TDD). Te pedimos que puedas implementar alguna de estas prácticas en alguna funcionalidad que creas importante.
7. Para tener homogeneidad en nuestros ambientes usamos docker. Creemos necesario que este servicio debe tener un Dockerfile que pueda generar el container del ambiente.