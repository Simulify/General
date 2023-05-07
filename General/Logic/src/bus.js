class bus {
  // Cette méthode abstraite est censée être implémentée par les classes qui étendent la classe "bus"
  transferer(source, destination) {
    // Lorsque la méthode n'est pas implémentée, une erreur est générée
    throw new Error('Abstract method not implemented');
  }
}

export default bus;