
class Machine{
  constructor(ACC,RI,SI,DX,BX,CO,CX,RIM,RAM,bus_adresse,bus_donnes,flags,uAL,mem,pile)
  {
    this.ACC=ACC
    this.RI=RI
    this.SI=SI
    this.DX=DX
    this.BX=BX
    this.CO=CO
    this.CX=CX 
    this.RIM=RIM 
    this.RAM=RAM 
    this.bus_adresse=bus_adresse
    this.bus_donnes=bus_donnes
    this.Flags=flags
    this.UAL=uAL 
    this.memoire=mem 
    this.pile=pile 
  }
}
export default Machine;