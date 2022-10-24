(() => {


        // Resolver sin la triple condicional dentro del if
        // includes? arrays?
        function isRedFruit(fruit: string): boolean {

            const fruits = ['apple', 'strawberry', 'cherry', 'raspberry'];
            return (fruits.includes(fruit));

        }
        let isFirstStepWorking = true;
        let isSecondStepWorking = true;
        let isThirdStepWorking = true;
        let isFourthStepWorking = true;
        // Simplificar esta función
        // switch? Object literal? validar posibles colores
        function getFruitsByColor(color: string): string[] {
            switch (color) {
                case 'red':
                    return ['manzana', 'fresa'];
                case 'yellow' :
                    return ['piña', 'banana'];
                case 'purple' :
                    return ['mo ras', 'uvas'];
                default:
                    throw Error('the color must be: red, yellow, purple');
            }

            // Simplificar esta función


            function workingSteps() {
                if (!isFirstStepWorking)
                    return 'First step broken.';
                if (!isSecondStepWorking)
                    return 'Second step broken.';
                if (!isThirdStepWorking)
                    return 'Third step broken.';
                if (!isFourthStepWorking)
                    return 'Fourth step broken.';
                else
                    return 'Working properly!';

            }
        }


        // isRedFruit
        console.log({isRedFruit: isRedFruit('cereza'), fruit: 'cereza'}); // true
        console.log({isRedFruit: isRedFruit('piña'), fruit: 'piña'}); // true

        //getFruitsByColor
        console.log({redFruits: getFruitsByColor('red')}); // ['manzana', 'fresa']
        console.log({yellowFruits: getFruitsByColor('yellow')}); // ['piña', 'banana']
        console.log({purpleFruits: getFruitsByColor('purple')}); // ['moras', 'uvas']
        // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

        // workingSteps
        console.log({workingSteps: workingSteps()}); // Cambiar los valores de la línea 31 y esperar los resultados


    }

)
();




