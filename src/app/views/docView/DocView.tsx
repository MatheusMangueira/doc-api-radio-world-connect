'use client';
import { StationTitle } from '../newStationsView/components/stationTitle';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { text } from './text';

export const DocView = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="bg-white w-full p-10 flex flex-col items-center">
        <div className="pt-14 pb-8">
          <StationTitle name="Documentação Radio World Connect API" />
        </div>

        <div className="max-w-[880px] text-base">
          <div className="pb-7">
            <h1 className="text-4xl font-bold pb-5">Introdução</h1>
            <p className="">
              Esta documentação tem como objetivo orientá-lo na exploração dos
              recursos oferecidos pelo Radio World Connect API, demonstrando
              passo a passo como realizar consultas. Dessa forma, você poderá
              aproveitar ao máximo todas as funcionalidades disponíveis
            </p>
          </div>

          <div className="pb-7">
            <h1 className="text-4xl font-bold pb-5"> Infos </h1>
            <p className="pb-2">
              Esta API é completamente gratuita, de código aberto e pode ser
              utilizada por qualquer pessoa para:
            </p>

            <ul className="list-disc pl-6">
              <li>Integrá-la em software, seja ele livre ou proprietário.</li>
              <li>
                Possibilita a instalação em seu próprio servidor, permitindo
                espelhar todos os dados.
              </li>
              <li>
                É possível realizar o processo de Fork para adaptações
                personalizadas.
              </li>
            </ul>
          </div>

          <div className="pb-7 flex flex-col gap-5 w-full">
            <div>
              <h1 className="text-4xl font-bold pb-5"> Uso </h1>
              <h2 className="text-lg pb-2 font-bold">
                {' '}
                Listar todas as Estações cadastradas:{' '}
              </h2>
            </div>
            <div className="p-4 border border-black">
              <p>
                <span className="font-bold text-[#7e66b5] mr-1">GET: </span>
                <a
                  target="_blank"
                  className="underline text-blue-500"
                  href="https://radio-world-connect.onrender.com/radio/all"
                >
                  https://radio-world-connect.onrender.com/radio/all
                </a>
              </p>
            </div>

            <div className="w-full ">
              <div>
                <h2 className="text-lg pb-1 font-bold">Exemplo de Resposta:</h2>
              </div>

              <div className="p-4 border border-black lg:w-full md:w-[700px] w-[310px] ">
                <SyntaxHighlighter language="json" style={docco}>
                  {text.codeString}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="py-4">
              <h2 className="text-xl pb-7 font-bold">
                Informação e Paginação:
              </h2>
              <p className="pb-4">
                A API oferece informações sobre a paginação dos dados, para
                isso, basta adicionar os seguintes parâmetros na URL:
              </p>
              <table className=" w-full border-collapse border border-slate-400 ...">
                <thead>
                  <tr>
                    <th className="border p-3 border-slate-300 ...">Chave</th>
                    <th className="border p-3 border-slate-300 ...">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 border-slate-300 ...">size</td>
                    <td className="border p-3 border-slate-300 ...">2</td>
                  </tr>
                  <tr>
                    <td className="border p-3 border-slate-300 ...">page</td>
                    <td className="borderv p-3 border-slate-300 ...">1</td>
                  </tr>
                </tbody>
              </table>
              <p className="pt-4 pb-4">
                Sendo 'size' a quantidade de itens que serão retornados e 'page'
                a página atual. Lembrando que a paginação começa em 0.
              </p>

              <div className="p-4 mb-4 border border-black">
                <p>
                  <span className="font-bold text-[#7e66b5] mr-1">GET: </span>
                  <a
                    target="_blank"
                    className="underline text-blue-500"
                    href="https://radio-world-connect.onrender.com/radio/all?size=10&page=1"
                  >
                    https://radio-world-connect.onrender.com/radio/all?size=10&page=1
                  </a>
                </p>
              </div>

              <div className="p-4 border border-black lg:w-full md:w-[700px] w-[310px] ">
                <SyntaxHighlighter language="json" style={docco}>
                  {text.codeStringPage}
                </SyntaxHighlighter>
              </div>

              <div className="pt-7 ">
                <h2 className="text-lg pb-7 font-bold">
                  Filtrar Estações por nome:
                </h2>

                <p className="pb-4">
                  Para filtrar as estações por nome, é suficiente adicionar os
                  seguintes parâmetros à URL:
                </p>

                <div className="pb-4">
                  <table className=" w-full border-collapse border border-slate-400 ...">
                    <thead>
                      <tr>
                        <th className="border p-3 border-slate-300 ...">
                          Chave
                        </th>
                        <th className="border p-3 border-slate-300 ...">
                          Valor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 border-slate-300 ...">
                          name
                        </td>
                        <td className="border p-3 border-slate-300 ...">
                          Bahia FM 88.7
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border border-black">
                  <p>
                    <span className="font-bold text-[#7e66b5] mr-1">GET: </span>
                    <a
                      target="_blank"
                      className="underline text-blue-500"
                      href="https://radio-world-connect.onrender.com/radio/filter?name=88"
                    >
                      https://radio-world-connect.onrender.com/radio/filter?name=88
                    </a>
                  </p>
                </div>

                <p className="py-4">
                  Lembrando que se nenhum parâmetro for fornecido, a lista irá
                  incluir todas as estações disponíveis.
                </p>

                <div className="p-4 border border-black lg:w-full md:w-[700px] w-[310px] ">
                  <SyntaxHighlighter language="json" style={docco}>
                    {text.codeStringFilter}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div className="py-7">
                <h2 className="font-bold">OBS:</h2>
                <p>
                  Este projeto foi concebido com o propósito de estudo e pode
                  conter eventuais imperfeições. Por favor, caso detecte algum
                  problema, fique à vontade para atualizar a API, se possível.
                  Estou também à disposição através do LinkedIn para qualquer
                  tipo de assistência ou esclarecimento adicional. O objetivo
                  principal desta iniciativa foi apoiar os apaixonados por
                  rádios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
