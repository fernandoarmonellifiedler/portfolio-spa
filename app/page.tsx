'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

// Sample project data
const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    tags: ["React Native", "Firebase"],
    link: "https://project3.com"
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            {['home', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <Button
                  variant={activeSection === section ? "default" : "ghost"}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">John Doe</h1>
            <p className="text-xl mb-6">Full Stack Developer</p>
            <p className="max-w-2xl mx-auto">
              I&apos;m a passionate developer with experience in building web and mobile applications.
              My expertise includes React, Node.js, and cloud technologies.
            </p>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <a href="mailto:john@example.com" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t mt-auto">
        <div className="container mx-auto px-4 py-4 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}