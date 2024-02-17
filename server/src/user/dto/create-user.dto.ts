export class CreateUserDto {
    id: number; // ид
    name: string; // имя
    surname: string; // фамилия
    patronymic: string; // отчество
    login: string; // логин
    email: string; // имайл
    password: string; // пароль епт
    password_repeat: string; // повтор пароля
    rules: boolean; // соглашение с правилами
    isAdmin: boolean; // проверка на админа
}
