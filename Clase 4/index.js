// 0 1 1 2 3 5 8 13 21 34 .....
const fibonacci = (numero) => {
	if (numero < 2) {
		return numero;
	}

	return fibonacci(numero - 1) + fibonacci(numero - 2);
};

fibonacci(5); // 5

//fibonacci(5) => 5 < 2 es falso
//fibonacci(5) =>  fibonacci(5 - 1)   +      fibonacci(5 - 2)
//fibonacci(5) =>  fibonacci(4)        +       fibonacci(3)

//fibonacci(4) => 4 < 2 es falso
//fibonacci(4) =>  fibonacci(4 - 1)   +      fibonacci(4 - 2)
//fibonacci(4) =>  fibonacci(3)        +       fibonacci(2)

//fibonacci(3) => 3 < 2 es falso
//fibonacci(3) =>  fibonacci(3 - 1)   +      fibonacci(3 - 2)
//fibonacci(3) =>  fibonacci(2)        +       fibonacci(1)

//fibonacci(2) => 2 < 2 es falso
//fibonacci(2) =>  fibonacci(2 - 1)   +      fibonacci(2 - 2)
//fibonacci(2) =>  fibonacci(1)        +       fibonacci(0)

//fibonacci(1) => 1 < 2 es verdadero
//fibonacci(1) =>  1
//fibonacci(0) => 0 < 2 es verdadero
//fibonacci(0) =>  0

//fibonacci(2) => 1 (fibonacci(1)        +       fibonacci(0))
//fibonacci(3) => 2 (fibonacci(2)        +       fibonacci(1))
//fibonacci(4) => 3 (fibonacci(3)        +       fibonacci(2))
//fibonacci(5) => 5 (fibonacci(4)        +       fibonacci(3))
