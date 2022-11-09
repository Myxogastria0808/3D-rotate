//コンテンツの切り替え
$(document).ready(function () {
	$('.pmd_1_root').click(function (e) {
	  $('.pmd_1').removeClass("inactive");
	  $('.pmd_2').addClass("inactive");
	  $('.pmd_3').addClass("inactive");
	  $('.pmd_4').addClass("inactive");
	  $('.pmd_5').addClass("inactive");
	  $('.pmd_6').addClass("inactive");
	  $('.pmd_7').addClass("inactive");
	  $('.pmd_8').addClass("inactive");
	});
	$('.pmd_2_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').removeClass("inactive");
		$('.pmd_3').addClass("inactive");
		$('.pmd_4').addClass("inactive");
		$('.pmd_5').addClass("inactive");
		$('.pmd_6').addClass("inactive");
		$('.pmd_7').addClass("inactive");
		$('.pmd_8').addClass("inactive");
	});
	$('.pmd_3_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').addClass("inactive");
		$('.pmd_3').removeClass("inactive");
		$('.pmd_4').addClass("inactive");
		$('.pmd_5').addClass("inactive");
		$('.pmd_6').addClass("inactive");
		$('.pmd_7').addClass("inactive");
		$('.pmd_8').addClass("inactive");
	});
	$('.pmd_4_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').addClass("inactive");
		$('.pmd_3').addClass("inactive");
		$('.pmd_4').removeClass("inactive");
		$('.pmd_5').addClass("inactive");
		$('.pmd_6').addClass("inactive");
		$('.pmd_7').addClass("inactive");
		$('.pmd_8').addClass("inactive");
	});
	$('.pmd_5_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').addClass("inactive");
		$('.pmd_3').addClass("inactive");
		$('.pmd_4').addClass("inactive");
		$('.pmd_5').removeClass("inactive");
		$('.pmd_6').addClass("inactive");
		$('.pmd_7').addClass("inactive");
		$('.pmd_8').addClass("inactive");
	});
	$('.pmd_6_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').addClass("inactive");
		$('.pmd_3').addClass("inactive");
		$('.pmd_4').addClass("inactive");
		$('.pmd_5').addClass("inactive");
		$('.pmd_6').removeClass("inactive");
		$('.pmd_7').addClass("inactive");
		$('.pmd_8').addClass("inactive");
	});
	$('.pmd_7_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').addClass("inactive");
		$('.pmd_3').addClass("inactive");
		$('.pmd_4').addClass("inactive");
		$('.pmd_5').addClass("inactive");
		$('.pmd_6').addClass("inactive");
		$('.pmd_7').removeClass("inactive");
		$('.pmd_8').addClass("inactive");
	});
	$('.pmd_8_root').click(function (e) {
		$('.pmd_1').addClass("inactive");
		$('.pmd_2').addClass("inactive");
		$('.pmd_3').addClass("inactive");
		$('.pmd_4').addClass("inactive");
		$('.pmd_5').addClass("inactive");
		$('.pmd_6').addClass("inactive");
		$('.pmd_7').addClass("inactive");
		$('.pmd_8').removeClass("inactive");
	});
  });