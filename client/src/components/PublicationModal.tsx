import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface PublicationDetails {
  title: string;
  authors: string;
  conference: string;
  doi: string;
  description: string;
  link: string;
  year: string;
}

interface PublicationModalProps {
  publication: PublicationDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PublicationModal({ publication, isOpen, onClose }: PublicationModalProps) {
  if (!publication) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-2">
              <h2 className="text-2xl font-bold mb-4">{publication.title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Authors</h3>
                  <p className="text-muted-foreground">{publication.authors}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Publisher</h3>
                  <Badge variant="secondary">{publication.conference}</Badge>
                  <span className="ml-2 text-muted-foreground">({publication.year})</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">DOI</h3>
                  <p className="text-muted-foreground font-mono text-sm">{publication.doi}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">{publication.description}</p>
                </div>

                <div className="pt-4">
                  <Button asChild>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}