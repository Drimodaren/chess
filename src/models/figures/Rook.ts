import { Figure, FigureNames } from "./Figure";
import balckLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? balckLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }
}
