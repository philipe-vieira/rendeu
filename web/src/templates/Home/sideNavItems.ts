import { TiHome } from 'react-icons/ti';
import { RiArrowUpDownLine } from 'react-icons/ri';

export default [
  {
    page: "home",
    path: "/home",
    icon: TiHome,
    subpages: [
      {
        page: "subpage 1",
        path: "#"
      }
    ]
  }, 
  {
    page: "Transações",
    path: "/transactions",
    icon: RiArrowUpDownLine,
    subpages: [
      {
        page: "Receitas",
        path: "#"
      },
      {
        page: "Despesas",
        path: "#"
      }
    ]
  },
  {
    page: "Layouts",
    path: "/layout",
    icon: RiArrowUpDownLine,
    subpages: []
  }
]