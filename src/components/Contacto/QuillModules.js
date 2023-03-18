import Quill from 'quill';
const NameModule = Quill.import('core/module');

class NombreContacto extends NameModule {
  constructor(quill, options) {
    super(quill, options);
    this.quill = quill;
    this.options = options;
    this.nombreContacto = '';
    this.quill.on('text-change', () => {
      this.nombreContacto = this.quill.root.innerHTML;
    });
  }

  getNombreContacto() {
    return this.nombreContacto;
  }
}

Quill.register('modules/nombreContacto', NombreContacto);

