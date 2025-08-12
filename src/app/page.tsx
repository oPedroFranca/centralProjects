import LayoutStructure from '@/shared/layout/LayoutStructure';
import * as S from './styles';
import { HeaderPagesTitle } from '@/components/HeaderPagesTitle';
import { Button } from '@/components';
import { BiPlus } from 'react-icons/bi';

export default function Home() {
  return (
    <>
      <HeaderPagesTitle
        title="Qualquer Nome"
        description="Gerencie e acompanhe seus projetos pessoais"
        buttons={
          <Button
            className="
              bg-secondary-purple-500
              hover:bg-secondary-purple-600 
              text-secondary-purple-200
              hover:text-white
              border
              border-secondary-purple-400
              hover:border-secondary-purple-500
              px-3
              py-2
              h-auto
              rounded-lg
              gap-1
            "
          >
            <BiPlus className="h-4 w-4" />
            <span>Novo Projeto</span>
          </Button>
        }
      />
    </>
  );
}
