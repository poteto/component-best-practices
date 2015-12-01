export default function() {
  this.transition(
    this.toRoute('index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
