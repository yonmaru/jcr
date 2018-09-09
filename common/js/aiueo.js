// JavaScript Document

$(function(){
	$('#aiueo').on('change', function() {
		si = $('#aiueo').val();

		if(si == "ア"){
			$('#form_a').html('<option value="">未選択</option><option value="ア">あ</option><option value="イ">い</option><option value="ウ">う</option><option value="エ">え</option><option value="オ">お</option>');
		}else if(si == "カ"){
			$('#form_a').html('<option value="">未選択</option><option value="カ">か</option><option value="キ">き</option><option value="ク">く</option><option value="ケ">け</option><option value="コ">こ</option>');
		}else if(si == "サ"){
			$('#form_a').html('<option value="">未選択</option><option value="サ">さ</option><option value="シ">し</option><option value="ス">す</option><option value="セ">せ</option><option value="ソ">そ</option>');
		}else if(si == "タ"){
			$('#form_a').html('<option value="">未選択</option><option value="タ">た</option><option value="チ">ち</option><option value="ツ">つ</option><option value="テ">て</option><option value="ト">と</option>');
		}else if(si == "ナ"){
			$('#form_a').html('<option value="">未選択</option><option value="ナ">な</option><option value="ニ">に</option><option value="ヌ">ぬ</option><option value="ネ">ね</option><option value="ノ">の</option>');
		}else if(si == "ハ"){
			$('#form_a').html('<option value="">未選択</option><option value="ハ">は</option><option value="ヒ">ひ</option><option value="フ">ふ</option><option value="ヘ">へ</option><option value="ホ">ほ</option>');
		}else if(si == "マ"){
			$('#form_a').html('<option value="">未選択</option><option value="マ">ま</option><option value="ミ">み</option><option value="ム">む</option><option value="メ">め</option><option value="モ">も</option>');
		}else if(si == "ヤ"){
			$('#form_a').html('<option value="">未選択</option><option value="ヤ">や</option><option value="ユ">ゆ</option><option value="ヨ">よ</option>');
		}else if(si == "ラ"){
			$('#form_a').html('<option value="">未選択</option><option value="ラ">ら</option><option value="リ">り</option><option value="ル">る</option><option value="レ">れ</option><option value="ロ">ろ</option>');
		}else if(si == "ワ"){
			$('#form_a').html('<option value="">未選択</option><option value="ワ">わ</option><option value="ヲ">を</option><option value="ン">ん</option>');
		}

	});
});

