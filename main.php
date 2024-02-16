<?php 
$token = "6570889926:AAGQ1oYhtCP7HYoID5hA63A432iq8SQmIVw"; 
$chat_id = "5010907528"; 
if ($_POST['act'] == 'order') { 
	$postname = ($_POST['postname']); 
	$postnumber = ($_POST['postnumber']); 
	$arr = array( 'Имя:' => $postname, 'Телефон:' => $postnumber, ); 
$txt = "";
foreach($arr as $key => $value) {$txt .= "<b>".$key."</b> ".$value."%0A"; }; 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
	return 1; 
     //alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'); 
   } else {     
	return 0;
//       alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.'); 
   } 
}
?>
