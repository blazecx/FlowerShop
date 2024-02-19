import { MinLength, IsEmail } from "class-validator";

export class CreateUserDto {

    name: string; // имя
    surname: string; // фамилия
    patronymic: string; // отчество
    login: string; // логин
    @IsEmail()
    email: string; // имайл
    @MinLength(6, {message: "Пароль состоит из 6 символов"})
    password: string; // пароль епт
    // @MinLength(6, {message: "Пароль состоит из 6 символов"})
    // password_repeat: string; // повтор пароля

    isAdmin: boolean; // проверка на админа
}
