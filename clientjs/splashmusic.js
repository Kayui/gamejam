let splashconductor = {};
var splashMusic = function() {
	splashconductor = new BandJS();

	splashconductor.setTimeSignature(2, 2);
	splashconductor.setTempo(200);
	splashconductor.setMasterVolume(60);

	splashconductor.rightHand = splashconductor.createInstrument('square', 'oscillators'),
	splashconductor.leftHand = splashconductor.createInstrument('sawtooth', 'oscillators'),
	splashconductor.drum = splashconductor.createInstrument('white', 'noises');

		splashconductor.drum.setVolume(60);

		splashconductor.rightHand.rest('whole')
		.note('whole', 'C4, C#7').
		rest('whole')
		.note('whole', 'F5, C#7')
		;

		splashconductor.leftHand.note('whole', 'C#2');
		splashconductor.leftHand.note('whole', 'C#2');


		splashconductor.drum.note('whole');
		splashconductor.drum.note('whole');
		splashconductor.drum.rest('whole');
	splashconductor.player = splashconductor.finish();
	splashconductor.player.loop(false);

}
