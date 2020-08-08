import * as React from 'react'

interface ContextProps {
  setSelectedId: (id: number) => void
  selectedId: number
}

export const SelectedIdContext = React.createContext<ContextProps>({
  selectedId: 0,
  setSelectedId: () => null,
})

export const SelectedIdContextProvider = ({ children }) => {
  const [selectedId, setSelectedId] = React.useState<number | undefined>(
    undefined
  )

  return (
    <SelectedIdContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectedIdContext.Provider>
  )
}
