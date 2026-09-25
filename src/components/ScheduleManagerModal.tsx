import React, { useState } from 'react';
import { X, Clock, Check, RotateCcw } from 'lucide-react';
import { DaySchedule } from '../types';
import { INITIAL_SCHEDULE } from '../data/restaurantData';

interface ScheduleManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: DaySchedule[];
  onUpdateSchedule: (newSchedule: DaySchedule[]) => void;
}

export const ScheduleManagerModal: React.FC<ScheduleManagerModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onUpdateSchedule,
}) => {
  const [localSchedule, setLocalSchedule] = useState<DaySchedule[]>(schedule);

  if (!isOpen) return null;

  const handleTimeChange = (index: number, field: 'open' | 'close', value: string) => {
    const updated = [...localSchedule];
    updated[index] = { ...updated[index], [field]: value };
    setLocalSchedule(updated);
  };

  const handleToggleClosed = (index: number) => {
    const updated = [...localSchedule];
    updated[index] = { ...updated[index], isClosed: !updated[index].isClosed };
    setLocalSchedule(updated);
  };

  const handleSave = () => {
    onUpdateSchedule(localSchedule);
    onClose();
  };

  const handleReset = () => {
    setLocalSchedule(INITIAL_SCHEDULE);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#E8DFD8] overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E8DFD8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#E8DFD8] flex items-center justify-center text-[#A45C40]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#241C18]">
                Editar Horarios de Atención
              </h3>
              <p className="text-xs text-[#796C64]">
                Ajusta las horas según los cambios de temporada o feriados
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#796C64] hover:text-[#241C18] rounded-full hover:bg-[#F4EFEB]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Schedule List Form */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {localSchedule.map((item, idx) => (
            <div
              key={item.day}
              className={`p-3.5 rounded-xl border transition-colors flex items-center justify-between gap-3 ${
                item.isClosed
                  ? 'bg-gray-50 border-gray-200 text-gray-400'
                  : 'bg-white border-[#E8DFD8] text-[#241C18]'
              }`}
            >
              <div className="w-24">
                <span className="font-medium text-sm block">
                  {item.day}
                </span>
                <button
                  type="button"
                  onClick={() => handleToggleClosed(idx)}
                  className={`text-[11px] underline cursor-pointer ${
                    item.isClosed ? 'text-[#A45C40]' : 'text-[#796C64]'
                  }`}
                >
                  {item.isClosed ? 'Marcar abierto' : 'Marcar cerrado'}
                </button>
              </div>

              {item.isClosed ? (
                <span className="text-xs italic text-gray-500 font-medium">
                  Cerrado todo el día
                </span>
              ) : (
                <div className="flex items-center gap-2 text-xs">
                  <input
                    type="time"
                    value={item.open}
                    onChange={(e) => handleTimeChange(idx, 'open', e.target.value)}
                    className="px-2 py-1 bg-[#FAF8F5] border border-[#E8DFD8] rounded-md focus:outline-hidden focus:border-[#A45C40]"
                  />
                  <span>a</span>
                  <input
                    type="time"
                    value={item.close}
                    onChange={(e) => handleTimeChange(idx, 'close', e.target.value)}
                    className="px-2 py-1 bg-[#FAF8F5] border border-[#E8DFD8] rounded-md focus:outline-hidden focus:border-[#A45C40]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8DFD8] flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-[#796C64] hover:text-[#241C18] flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer predeterminado</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#796C64] hover:text-[#241C18]"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#241C18] hover:bg-[#3E3029] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Guardar Horarios</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
