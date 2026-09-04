import React from 'react';
import { 
  Monitor, Sliders, FolderTree, DownloadCloud, ShieldCheck, Keyboard,
  FileText, Type, Table, BookOpen, FileCheck, Printer,
  Grid, Calculator, GitFork, Search, Filter, BarChart3,
  Presentation, Sparkles, Cloud, Mail, Bot, Award, Play
} from 'lucide-react';

const iconMap = {
  Monitor, Sliders, FolderTree, DownloadCloud, ShieldCheck, Keyboard,
  FileText, Type, Table, BookOpen, FileCheck, Printer,
  Grid, Calculator, GitFork, Search, Filter, BarChart3,
  Presentation, Sparkles, Cloud, Mail, Bot, Award, Play
};

export default function LessonIcon({ name, className = "w-6 h-6 text-white" }) {
  const IconComponent = iconMap[name] || Monitor;
  return <IconComponent className={className} />;
}
