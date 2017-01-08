let introconductor = {};
var loadIntroMusic = function() {
	introconductor = new BandJS();

	introconductor.setTimeSignature(2, 2);
	introconductor.setTempo(200);
	introconductor.setMasterVolume(60);

	introconductor.rightHand = introconductor.createInstrument('square', 'oscillators'),
	introconductor.leftHand = introconductor.createInstrument('sawtooth', 'oscillators'),
	introconductor.drum = introconductor.createInstrument('white', 'noises');

		introconductor.drum.setVolume(60);

		introconductor.rightHand.rest('whole')
		.note('whole', 'C4, C#4').
		rest('whole')
		;

		introconductor.leftHand.note('whole', 'C#2');
		introconductor.leftHand.note('whole', 'C#2');


		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.note('quarter');
		introconductor.drum.rest('whole');
	introconductor.player = introconductor.finish();
	introconductor.player.loop(true);
}
