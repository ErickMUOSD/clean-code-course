// @ts-ignore
(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const latestTasks = [
        { id: 1, approved: false },
        { id: 2, approved: false },
        { id: 3, approved: true },
        { id: 4, approved: false },
        { id: 5, approved: false },
        { id: 7, approved: true },
    ];

    // Archivos marcados para borrar - files to delete
    const tasksNotApproved = latestTasks.filter( task => !task.approved );


    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const currentDay = new Date();

    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberOfFiles = 33;

    // primer nombre - first name
    const firstName = 'Fernando';

    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const sinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maximumClassesPerStudent = 6;


})();



