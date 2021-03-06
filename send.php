<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование самого письма
$title = 'Новое обращение Best Tour Plan';
$body = "
<h2>Новое сообщение</h2>
<b>Почта:</b> $email<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username = 'bekzatatazanov94@gmail.com'; // Логин на почте
    $mail->Password = 'ssehnybdluhvfdux'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('bekzatatazanov94@gmail.com', 'Бекзат Атажанов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('bekzat_sinx@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = 'success';
    } else {
        $result = 'error';
    }
} catch (Exception $e) {
    $result = 'error';
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Location: email.html');
//==========================
