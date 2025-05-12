import dbConnect from '@/lib/mongoose';
import Project from '@/models/project';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const _id = params.id;
  try {

    await dbConnect();



    const project = await Project.findById(_id);
    
    if (project) {
      console.log('API: Project details:', {
        id: project._id.toString(),
        title: project.title,
        category: project.category
      });
    }

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('API: Error fetching project:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}