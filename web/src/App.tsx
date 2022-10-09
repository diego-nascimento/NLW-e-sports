import LogoImage from './assets/logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

export const App: React.FC = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={LogoImage} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/game1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block mt-1 ">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block mt-1">Dota 2</strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block mt-1">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block mt-1">
              Apex Legend
            </strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block mt-1">
              Fortnite
            </strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white block mt-1">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#212634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white block font-black">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 transition-colors flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar Anuncio
          </button>
        </div>
      </div>
    </div>
  );
};
