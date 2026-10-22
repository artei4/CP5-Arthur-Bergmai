import { useState } from 'react'
import ichigo from './ichigo.jpg'

function BotaoCurtir() {
    const [curtido, setCurtido] = useState(false)

    return (
        <button
            type="button"
            aria-pressed={curtido}
            onClick={() => setCurtido(!curtido)}
            className={
                curtido
                    ? 'rounded-full border border-marca bg-marca px-4 py-2 font-semibold text-white'
                    : 'rounded-full border border-marca px-4 py-2 font-semibold text-marca hover:bg-marca/10'
            }
        >
            {curtido ? '♥' : '♡'} Curtir
        </button>
    )
}

function Cartao({ titulo, children }) {

    return (
        <article className="flex w-full max-w-2xl items-start gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Imagem à esquerda */}
            <img
                src={ichigo}
                alt="Ichigo"
                className="h-64 w-64 shrink-0 rounded-xl object-contain object-top"
            />

            {/* Conteúdo à direita */}
            <div className="flex min-w-0 flex-1 flex-col items-start">
                <h2 className="text-xl font-bold text-gray-900">
                    {titulo}
                </h2>

                <div className="mt-2 text-sm leading-relaxed text-gray-700">
                    {children}
                </div>


                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    Ichigo... você sabe como eu odeio a chuva? E chove nesse mundo
                    também. Se seu coração estiver perturbado, o céu fica nublado.
                    Se você estiver triste, vai chover muito fácil. Será que você
                    consegue entender... o medo de ser pego na chuva nesse mundo
                    solitário... Para parar essa chuva, eu vou te dar qualquer força,
                    qualquer poder. Se você só tiver fé em mim, eu não vou deixar
                    nenhuma chuva cair nesse mundo. Confie em mim, Ichigo. Enquanto
                    eu estiver aqui, você nunca vai lutar sozinho.
                </p>


                <div className="mt-4">
                    <BotaoCurtir />
                </div>
            </div>
        </article>
    )
}

export { BotaoCurtir }
export default Cartao



