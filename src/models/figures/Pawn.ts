import { Figure, FigureNames } from "./Figure";
import balckLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? balckLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
}
