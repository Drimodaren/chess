import { Cell } from "../Cell";
import { Colors } from "./../Colors";
import { Figure, FigureNames } from "./Figure";
import balckLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? balckLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}
